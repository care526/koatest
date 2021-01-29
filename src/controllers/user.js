const pool = require('../mysql');

class User {
  async list(ctx, next) {
    const [rows] = await pool.query('select count(*) from user');
    ctx.body = {
      code: 200,
      data: rows,
    };
  }
  
  async add(ctx, next) {
    const { uid, uname } = ctx.query;
    await pool.query(`INSERT INTO user (uid, uname) VALUES (${uid}, '${uname}')`).then(res => {
      console.log(res);
    }).catch(e => {
      console.log(Object.values(e))
    })
    ctx.body = {
      code: 200,
    };
  }
}

exports.User = new User();
