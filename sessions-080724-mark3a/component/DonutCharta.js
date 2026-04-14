import React from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import * as d3 from 'd3';
import {ART} from 'react-native';
//note: react-native-communit/art is not supported in react native expo 37 yet -- similar issue here https://github.com/react-native-community/react-native-picker/issues/45#issuecomment-633163973
//import {Surface, Shape, Path, Group, Text, ClippingRectangle} from '@react-native-community/art';

  const {
    Surface, 
    Shape, 
    Path, 
    Group, 
    Text, 
    ClippingRectangle
  } = ART;
  

//todo: donut chart should have 1 big donut with no divisions if there is one piece of data
//const {Surface, Shape, Text, Group, ClippingRectangle, Path} = ART;

//todo: make each section of the graph interactable
//todo: change this to a functional component
export class DonutChart extends React.Component {



  constructor(props) {
        super(props);
        // this.createBarChart = this.createBarChart.bind(this);
        // this.drawLine = this.drawLine.bind(this);            
        // this.getRandomColor = this.getRandomColor.bind(this);
    }

  render(){
    const screen = Dimensions.get('window');

    const margin = {top: 20, right: 25, bottom: 25, left: 25}
    const width = screen.width - margin.left - margin.right
    const height = screen.height - margin.top - margin.bottom - 300

    const sectionAngles = d3.pie().value(d => d[this.props.valueName])(this.props.data)
  
  const path = d3.arc()
  .outerRadius(100) //must be less than 1/2 the chart's height/width -- i.e. its diameter
  .padAngle(.03) //defines the amount of whitespace between sections
  .innerRadius(70) //the size of the inner 'donut' whitespace


  const labelArc = d3.arc()
    .outerRadius(110)
    .innerRadius(110)
  //  const colors = d3.scaleLinear()
  // .domain([0, Math.max(this.props.data.length - 1, 13)]).range([0.000000001, 0.999999999]); //function that splits a range from 0 to 1 by the number of categroies in your data -- won't get good hex color numbers unless you do a tiny offset like this
  
{/* color hex codes of Tableau's easiest for colorblind people to distinguish pallette 

https://jrnold.github.io/ggthemes/reference/tableau_color_pal-2.png
*/}

  const colors = [
    "#1f77b4", "#2ca02c", "#7f7f7f", "#8c564b", "#9edae5", "#17becf", "#98df8a", "#9467bd", "#aec7e8", "bcbd22", "c5b0d5", "c7c7c7", "c49c94", "d62728", "dbdb8d", "e377c2", "f7b6d2", "ff7f0e", "ff9896", "ffbb78"
  ]
  const max = Math.max(...this.props.data.map(item => item[this.props.valueName]));
  
  const altY = (section) => {return Math.max(path.centroid(section)[1] - max/section.data[this.props.valueName], -160)}

  const replaceWithTheCapitalLetter = (values) => {
   return values.charAt(0).toUpperCase() + values.slice(1);
}

    return(        
        <View>
        <Surface width={screen.width} height={height}>
          <Group x={screen.width/2} y={height/2}>

            {/*fill={'#' + colors(section.index).toString(16).substr(-6)}*/} 
            {
             
              sectionAngles.map(section => (
                  <Shape
                    key={section.index}
                    d={path(section)}
                    stroke="#000"
                   
                   fill = {colors[section.index]}
                    strokeWidth={1}
            
                  />
                ))
            }  

            {/*this is the "shadowing" artificially created for text for better contrast
              todo: replace artificial shadow with just adding shadowProps to text?
            */
            }
            {
              sectionAngles.map(section => (
                  <Text    
                  x={path.centroid(section)[0] >= 0 ? Math.min(path.centroid(section)[0] + 70, 110): Math.max(path.centroid(section)[0] - 70, -110)}
                  y={path.centroid(section)[1] >= 0 ? path.centroid(section)[1] + 20: path.centroid(section)[1] - 40}
                    fill="#000"
                    alignment={path.centroid(section)[0] >=0 ? "left" : "right"}
                    font={{
                      fontSize: section.data[this.props.keyName].length >= 7 ? 12:16,
                      fontFamily:"helvetica",
                      fontWeight:"bold"}}
                  
                        >
                      {replaceWithTheCapitalLetter(section.data[this.props.keyName])+":"}{section.data[this.props.valueName]}
                  </Text>  
              ))
            }

            {
              /*todo: create second segment and connect to offcenter text*/
        sectionAngles.map(section => (
        <Shape
          d={new Path().moveTo(path.centroid(section)[0], path.centroid(section)[1]).lineTo(path.centroid(section)[0] >= 0 ? path.centroid(section)[0] + 20 :  path.centroid(section)[0] -20, path.centroid(section)[1] >= 0 ? path.centroid(section)[1] + 30: path.centroid(section)[1] - 30).lineTo(path.centroid(section)[0] >= 0 ? Math.min(path.centroid(section)[0] + 70, 110): Math.max(path.centroid(section)[0] - 70, -110),path.centroid(section)[1] >= 0 ? path.centroid(section)[1] + 30: path.centroid(section)[1] - 30)}
          stroke="black"
          strokeWidth={3}
        />
        ))
      
            }
              
          </Group>
        </Surface>

        </View>
    );
  }
}
