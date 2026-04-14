import React from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import {ART} from 'react-native';
{/*todo: add tableau colors instead of the random color pallette here */}
//keep in mind that the Text component here is from ART not react-native! https://github.com/react-native-china/react-native-ART-doc/blob/master/doc.md#text for more info

//import {Surface, Shape, Path, Group, Text, Transform, LinearGradient, ClippingRectangle} from '@react-native-community/art';


const {
    Surface,
    Group,
    Rectangle,
    ClippingRectangle,
    LinearGradient,
    Shape,
    Path,
    Text,
    Transform
} = ART;

import {
    max,
    ticks
} from 'd3-array'

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as format from 'd3-format';
import * as axis from 'd3-axis';
import * as path from 'd3-path';
import Colors from 'colors';
const d3 = {
    scale,
    shape,
    format,
    axis,
    path,
};

import {
    scaleLinear,
    scaleBand,
    scaleTime
}  from 'd3-scale';

const colours = {
    black: 'black',
    blue: 'steelblue',
    brown: 'brown'
}

//todo: if there are no values, the bar chart should be empty -- I need to rescale
export class BarChart extends React.Component {

    constructor(props) {
        super(props);
        this.createBarChart = this.createBarChart.bind(this);
        this.drawLine = this.drawLine.bind(this);            
        this.getRandomColor = this.getRandomColor.bind(this);
    }

    

    getRandomColor() {
      
       return '#' + Math.random().toString(16).substr(-6); //colors are in hex which means base 16 which is why toString has 16 as argument, then you just take 6 digits for the color number.
    }               

    drawLine(startPoint, endPoint) {
        var path = d3.path.path();
        path.lineTo(startPoint, endPoint);
        return path;
    }

    createBarChart(x, y, w, h) {
        var path = d3.path.path();
        path.rect(x, y, w, h);
        return path;
    }

    render() {
        const screen = Dimensions.get('window');
        const margin = {top: 20, right: 25, bottom: 100, left: 25}
         
         //this off-centers the graph to fit in a ylabel if it exists in the props
        const ylabeloffset = this.props.ylabel === undefined ? 5:20;
        
        const width = screen.width - margin.left - margin.right -  ylabeloffset
        const height = screen.height - margin.top - margin.bottom - 200

        const data = this.props.data;
        const x = d3.scale.scaleBand()
            .rangeRound([0, width])
            .padding(0.1)
            .domain(data.map(d => d.rating))

        const maxFrequency = max(data, d => d.frequency)

        const y = d3.scale.scaleLinear()
            .rangeRound([height, 0])
            .domain([0, maxFrequency])

        const firstRatingX = x(data[0].rating)
        const secondRatingX = x(data[1].rating)
        const lastRatingX = x(data[data.length - 1].rating)
        const labelDx = (secondRatingX - firstRatingX) / 2
        const middleRatingX = (lastRatingX - firstRatingX)/2 + labelDx

        const bottomAxis = [firstRatingX - labelDx, lastRatingX + labelDx]

        const bottomAxisD = d3.shape.line()
                                .x(d => d + labelDx)
                                .y(() => 0)(bottomAxis)
        //this helps to filter out the non-integer ticks for the y-axis (no fractional frequencies)
        const leftAxis = ticks(0, maxFrequency, 5).filter(tick => Number.isInteger(tick));

        const leftAxisD = d3.shape.line()
                            .x(() => bottomAxis[0] + labelDx)
                            .y(d => y(d) - height)(leftAxis)
        const notch = 5
        const labelDistance = 11
        const emptySpace = "";
        const rotate = new Transform().rotate(-90);

        return(
            <View>
            {/* Changed the height to now be the size of the visualization (since I don't want it to be sized to the whole screen) and added 100 to fit in the x-axis and its labels */}
            <Surface width={screen.width} height={height + 100}>

            
                <Group x={margin.left+ylabeloffset} y={margin.top}>
                    <Group x={0} y={height}>
                       <Group key={-1}>
                    
                         
                        
                            <Shape d={bottomAxisD} stroke={colours.black} key="-1"/>
                        

                       
                              {     
                                data.map((d, i) =>(
                                    <Group
                                        x={x(d.rating) + labelDx}
                                        y={0}
                                        key={i + 1}
                                    >
                                        <Shape d={this.drawLine(0, notch)} y2={notch} />
                                        {/*this is not a regular Text component -- it's from ART so stylesheet doesn't work, and you have to use font and alignment props!*/}
               
               
                                        <Text
                                          y={labelDistance}
                                          fill={colours.black}
                                          font="18px helvetica"
                                          alignment = "center"
                                        >
                                          {d.rating}
                                        </Text>
                                    </Group>
                                ))
                              }
               
                                  <Text
                                     y={labelDistance + 25}
                                     fill={colours.black}
                                     x={middleRatingX}
                                     font="bold 20px helvetica"
                                     alignment = "center"
                                    >
                                      {this.props.xlabel}
                                    </Text>
                        </Group>
                        <Group key={-2} >
                            <Shape stroke={colours.black} d={leftAxisD} key="-1"/>
                            {
                                leftAxis.map((d, i) => (
                                    <Group x={0} y={y(d)-height} key={i + 1}>
                                        <Shape d={this.drawLine(notch, 0)} stroke={colours.black}/>
                                        <Text
                                            fill={colours.black}
                                            x={-10}
                                            y={-labelDistance}
                                            font="18px helvetica"
                                        >
                                            {d + emptySpace}
                                        </Text>
                                    </Group>
                                ))
                            }
                            <Text
                                transform={rotate}
                                    y={-height/2}
                                    fill={colours.black}
                                    x={-35}
                                    font="bold 20px helvetica"
                                    alignment = "center"
                                  >
                                    {this.props.ylabel}
                            </Text>
                           
                        </Group>
                        {
                            data.map((d, i) => (
                                <TouchableWithoutFeedback key={i} >
                                    <Shape
                                        d={this.createBarChart(x(d.rating), y(d.frequency) - height, x.bandwidth(), height - y(d.frequency))}
                                        fill={this.getRandomColor()}
                                        >
                                    </Shape>
                                </TouchableWithoutFeedback>
                            ))
                        }
                      
                    </Group>
                </Group>
                
            </Surface>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});