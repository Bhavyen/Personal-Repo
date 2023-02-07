//Only allows john to access the home page
//Since this a middleware function it only allows john to access any page 
const authorize = (req,res,next) =>{
  const {user} =req.query;
  if(user == 'john'){
    req.user={name:'john',id:3}
    next();
  }
  else
  {
    res.status(401).send('unauthorized')
  }
  console.log('authorize')
  next()
}
module.exports = authorize;