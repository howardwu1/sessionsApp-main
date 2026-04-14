import AsyncStorage from '@react-native-async-storage/async-storage';
import onValueChange from './onValueUtil.js';
import moment from 'moment';

const lastPullTime = () => {
  return AsyncStorage.getItem('dataPullTime')
    .then((item) => {
      if (item) {
        return item;
      } else {
        return new Date(0).toString();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getTeammatesCached = () => {
  return AsyncStorage.getItem('teammates')
    .then((item) => {
      if (item) {
        return item;
      } else {
        return '[]';
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUsernamesOrUseCachedValues = async (lambda, setItems = null) => {
  if ((new Date() - new Date(await lastPullTime())) / 60000 > 60) {
    onValueChange.onChange('dataPullTime', JSON.stringify(new Date()));
    getUsernames(lambda, setItems);
  } else {
    if (setItems) {
      setItems(JSON.parse(await getTeammatesCached()));
    }
  }
};

const getUsernames = async (lambda, setItems = null) => {
  var token = await AsyncStorage.getItem('token');
  //note: we need to .then right after response.json() because it's a promise not the actual data right away -- we cannot close off the then function after .json().

  const lambdaParams = {
    FunctionName: 'my-function-go-dynamoGetAllPublicDetails',
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: '{"Headers":{"Authorization":"Bearer ' + token + '"}}',
  };

  //note that you need to do a parens around the key, name json because it doesn't expect the braces to mean json natively without the parens or possibley another set of curly braces since you can use curly braces to also wrap code around
  lambda
    .invoke(lambdaParams)
    .promise()
    .then((data) => JSON.parse(data.Payload).body)
    .then((jsonArr) =>
      JSON.parse(jsonArr).map((json) => ({key: json.Username,
        name: json.Username,
      }))
    ).then((itemsArr) => {
      onValueChange.onChange('teammates', JSON.stringify(itemsArr));
      onValueChange.onChange('dataPullTime', JSON.stringify(new Date()));
      if (setItems) {
        setItems(itemsArr);
      }
    })
    .catch((error) => {
      console.log('error is coming from userDatautil');
      console.log(error);
    });

  // fetch("https://taco-loco.howardwu2.repl.co/allPublicUserDetails", {
  // method: "GET",
  // headers: {
  //   'Authorization': 'Bearer ' + token
  // }})
  //.then((response) => response.json().then((jsonArr) => jsonArr.map(json => {return {key: json.username, name: json.username};}))).then(itemsArr => setItems(itemsArr))
  // .done();
};

export { getUsernames, getUsernamesOrUseCachedValues };
