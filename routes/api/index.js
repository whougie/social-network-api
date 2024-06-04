const router = require('express').Router();
const usersRoute = require('./userRoutes');
const thoughtsRoute = require('./thoughtRoutes');

router.use('/users', usersRoute);
router.use('/thoughts', thoughtsRoute);

module.exports=router;