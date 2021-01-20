const pool = require('../mysql');

exports.list =  async function(ctx, next) {
  const [rows] = await pool.query('select * from users');
  ctx.body = rows;
}