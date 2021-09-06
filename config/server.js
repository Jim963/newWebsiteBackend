module.exports = ({ env }) => ({
  host: env('HOST', '202.182.124.162'),
  port: env.int('PORT', 81),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1f049af35e490a03082486848f044010'),
    },
  },
});
