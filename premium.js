function upgradeToPremium(user, plan) {
  user.plan = plan;
  user.premium = true;
  return user;
}
module.exports = { upgradeToPremium };
