exports.renderProfile = (req,res)=> {
  res.render('profile', {title: '내 정보 - NodeBird'});
};

exports.renderJoin = (req,res)=> {
  res.render('join', {title:  '회원 가입 - NodeBird'});
};

exports.renderMain = (req,res, next)=> {
  const twits = [];
  res.render('main', {
    title: 'NodeBird',
    twits: [],
  });
};

/**
 * 컨트롤러 : 
 * res.send, res.json, res.redirect, res.render
 * 등이 존재하는 미들웨어
 */