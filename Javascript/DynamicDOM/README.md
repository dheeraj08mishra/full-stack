while communication from one to another
we can't  pass json formated data directly we have to pass as serialized data 
that's why we use stringify to convert it into single line string

on another machine once we recieved this we have to parse before using that's why json.parse get used