updated the script inside package.json for running project
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
},
npm start === npm run start
because behind it executes `parcel index.html` from package.json, which we have defined in the script.

  
  Core of react was using createElement, createRoot and then render

  it was hard to read that's why JSX was got created.

  JSX is not part of react.

  for basic building we use to write markup and logic first, JSX merge it into one.
  JSX is not html inside js. it's like syntax


JSX ==> React.createElement=> ReactElement-js Object=> HTMLELEMNT(render)

JSX is not HTML --> it need some changes like class-> className
attribute in JSX needs to be written in camel cases.

for(multiple line statements wrap it inside () )


components type--> class based -> old  
                    functional based -> new



React functional component --> js function

compoent composition -> component inside component