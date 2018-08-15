let samples = [
  'a1.b1.c1',
  'a1.b1.c2',
  'a1.b1.c3',
  'a1.b1.c4',
  'a1.b1.c5',
  'a2.b1.c1',
  'a2.b1.c2',
  'a2.b1.c3',
  'a2.b1.c4',
  'a2.b1.c5',
  'a2.b1.c6',
  'a2.b1.c7',
  'a2.b1.c8',
  'a2.b1.c9',
  'a2.b1.c10',
  'a3.b2.c1',
  'a3.b2.c2',
  'a3.b2.c3',
  'a3.b2.c4',
  'a3.b2.c5'
];

let result = [];
let results = result;
samples.forEach(function (sample) {
  let string = sample, parent;
  let res = results;
  while(string != '' && res!=undefined) {
    // console.log(res);
    if(res.length == 0) {
      let temp = {};
      temp.name = string.split('.')[0];
      if (string.split('.')[1] != null) {
        temp.children = [];
      }
      res.push(temp);
      string = string.split('.').slice(1).join('.');
      if(temp.children != undefined){
        res = temp.children;
      }
    } else {
      let temp_var,matched=false;
      for(let i=0;i<res.length;i++) {
        // console.log(res[i]);
        if (res[i].name == string.split('.')[0]) {
          // console.log(string.split('.')[2]);
          parent = res[i];
          if (res[i].children != undefined && string.split('.')[2] != undefined) {
            // console.log(parent);
            // parent = res[i];
            temp_var = res[i].children;
          }
          else {
            // console.log(res[i]);
            // console.log(string.split('.')[2]);
            if (res[i].name == string.split('.')[0] && string.split('.')[2] != undefined) {
              let temp_2 = {};
              temp_2.name = string.split('.')[1];
              if (res[i].children != undefined) {
                res[i].children.push(temp_2);
              } else {
                res[i].children = [];
                res[i].children.push(temp_2);
              }
              temp_var = res[i].children;
            }
            else if (string.split('.')[2] != undefined) {
              res[i].children = [];
              let temp_2 = {};
              temp_2.name = string.split('.')[1];
              res[i].children.push(temp_2);
              temp_var = res[i].children;
            }
            else if (res[i].name == string.split('.')[0]) {
              let temp_2 = {};
              temp_2.name = string.split('.')[1];
              if (res[i].children != undefined) {
                res[i].children.push(temp_2);
              } else {
                res[i].children = [];
                res[i].children.push(temp_2);
              }
              temp_var = '';
            }
            else {
              res[i].children = [];
              let temp_2 = {};
              temp_2.name = string.split('.')[1];
              res[i].children.push(temp_2);
              temp_var = '';
            }
          }
          matched = true;
          if (temp_var != []) string = string.split('.').slice(1).join('.');
          if (temp_var == '') string = '';
          else res = temp_var;
          break;
        }
      }
      if(parent == undefined) {
        // console.log('undefined');
        let temp = {};
        temp.name = string.split('.')[0];
        if (string.split('.')[1] != null) {
          temp.children = [];
        }
        res.push(temp);
        string = string.split('.').slice(1).join('.');
        if(temp.children != undefined){
          res = temp.children;
        }
        // string = string.split('.').slice(1).join('.');
      }
      else if(!matched) {
        // console.log('not matched');
        let temp = {};
        temp.name = string.split('.')[0];
        parent.children.push(temp);
        // console.log(res);
        // console.log(parent);
        temp_var = parent.children;
        res = temp_var;
        // console.log(string);
      }
    }
  }
});

console.log(JSON.stringify(results));

