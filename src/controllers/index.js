const router = require('express').Router();
const { getUser, postUser } = require('./login.js');
const homeManager = require('./homeManager');
const supports = require('./support');
const loans = require('./loans');
const loanDetails = require('./loanDetails');
const supportDetails = require('./supportDetails');
const { clientError, serverError } = require('./error');
const { getLogOut } = require('./logout');
const addTicket = require('./addTicket');

router.route('/')
  .get(homeManager.get);

router.route('/support')
  .get(supports.get);

router.route('/loans')
  .get(loans.get);

router.route('/loan/:id')
  .get(loanDetails.get)
  .put(loanDetails.put);

router.route('/support/:id')
  .get(supportDetails.get)
  .put(supportDetails.put);

// Login Routes
router.route('/login')
  .get(getUser)
  .post(postUser);

// logout
router.route('/logout')
  .get(getLogOut);

router.route('/add-ticket')
  .get(addTicket.get)
  .post(addTicket.post);

router.use(clientError);
router.use(serverError);


module.exports = router;
