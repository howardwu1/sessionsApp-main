import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
//import { BarChart } from './BarChart';
//import { DonutChart } from './DonutChart';
import _ from 'lodash';
import {NotificationSpacer} from './NotificationBarSpacer';

//todo: include a radar chart
//todo: include gamification elements like lonely players double xp
//suggest who to mentor instead of always mentoring your friends
//have "stale moves" mechanic built in to reduce your xp and dull the weight of ratings you receive from close friends
//todo: donut chart doesn't recognize new technologies
export class Dashboard extends React.Component {
  
  constructor(props){
    super(props);
    this.initRecord();

  }
  
  static navigationOptions = {
    header: null,
  };
  
  state = {
    frequencyDataAll: [],
    frequencyDataMentor: [],
    subjectSplitDataAll: []
  }

  createRatingsData = (inputRatings) => {      
    let counts = _.countBy(inputRatings);
    let data = [];

    for (let rating = 1; rating <=5; rating ++){
      //note: counts[rating]===null fails, undefined is correct because it means that it's not even pointing to something vs defined and pointing to null
      if (counts[rating]===undefined) {
        data.push({"frequency": 0, "rating": rating.toString()})
      } else {
        data.push({"frequency": counts[rating], "rating": rating.toString()})
      }
    }
    data.push({"frequency": counts[null], "rating": "Unrated"});
    return data
  }


  createJsonData = (input) => {      
    let counts = _.countBy(input);
    let data = [];
    
    for (var key in counts) {
      data.push({"technology": key, "count": counts[key]})
    }

    return data;
  }

  initRecord = async() => {
     let ratings = [];
     let ratingsMentor = [];
     let subjects = [];

      //pipeline to take care of "all" categories

      if(this.props.screenProps.loggedInUser === 'test'){

      AsyncStorage.getItem('record').then(obj => {
        if (obj != null) {
          JSON.parse(obj)
            .filter(x => x.sessionMentee === this.props.screenProps.loggedInUser | x.sessionMentor === this.props.screenProps.loggedInUser)
            .map(x => {if(x.sessionMentor === this.props.screenProps.loggedInUser){
               ratings.push(x.sessionMentorRating);  
            }else ratings.push(x.sessionMenteeRating);
            
           // need to add subjects regardless of being a mentor or mentee
           subjects.push(x.sessionSubjectMatter);})

        

          this.setState({frequencyDataAll: this.createRatingsData(ratings)});
          this.setState({subjectSplitDataAll: this.createJsonData(subjects)});
        //reset ratings and subjects variable
          ratings = [];
          subjects = [];
         
        //pipeline to take care of "mentor" categories only
          JSON.parse(obj)
            .filter(x => x.sessionMentor === this.props.screenProps.loggedInUser)
            .map(x => ratings.push(x.sessionMentorRating));

          this.setState({frequencyDataMentor: this.createRatingsData(ratings)});
        }
      });
      }
      else{
    var token = await AsyncStorage.getItem("token");
    var sessions;
    fetch("https://taco-loco.howardwu2.repl.co/sessionFromUsername/" + this.props.screenProps.loggedInUser, {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + token
    }})
    .then((response) => {response.json().then(jsonArr => {jsonArr.map(
      x => {if(x.sessionMentor === this.props.screenProps.loggedInUser){
              ratings.push(x.sessionMentorRating);
              ratingsMentor.push(x.sessionMentorRating);
            }else ratings.push(x.sessionMenteeRating);
          subjects.push(x.sessionSubjectMatter);})
          
          this.setState({frequencyDataAll: this.createRatingsData(ratings)});
          this.setState({subjectSplitDataAll: this.createJsonData(subjects)});
  
          this.setState({frequencyDataMentor: this.createRatingsData(ratings)});


      })})
   .done();
      }
  
  }


    
    render() {
      {/* doing this because the barchart fails if the data is not all in there yet */}
        if(this.state.frequencyDataAll.length === 0 || this.state.frequencyDataMentor.length === 0){
          return(
            <View>
                 <Text style={styles.aboutTitle}>
                 {`\n`}
                  Loading Charts...
                 </Text>
            </View>
          )
        }
        
        return (  
          <View style={styles.container}>

          {/*note: this may seem like a lot of views but the only way to get notification spacer is to have views that encapulate the spaced but also another view that encapsulates a scrollview. Scrollview does not natively respect flexbox*/}
            
            <NotificationSpacer />

            <View style={styles.vizContainer}> 
            <ScrollView style={styles.vizContainer}>

       
                 <Text style={styles.aboutTitle}>
                
                  Overall Number of Ratings Received By Rating
                 </Text>
   {/*todo: need to change the BarChart component to be more generic (ratings doesn't need to be there as a variable name)
   todo: need to create y-axis labels*/}
        
        
                 <BarChart data={this.state.frequencyDataAll} xlabel="Rating (out of 5)" ylabel="Frequency"/>

                 <Text style={styles.aboutTitle}>
                  Number of Ratings Received As a Mentor By Rating
                 </Text>
                 
          
                 <BarChart data={this.state.frequencyDataMentor} xlabel="Rating (out of 5)" ylabel="Frequency"/>

                <Text style={styles.aboutTitle}>
                  Proportion of Sessions, Segmented By Technology
                 </Text>
                
                 <DonutChart data={this.state.subjectSplitDataAll} valueName="count" keyName="technology"/>
                
              </ScrollView>    
              </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  vizContainer:{
    flex: 16
  },
  aboutTitle: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
  }
});