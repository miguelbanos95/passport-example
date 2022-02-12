//PARA RENDERIZAR LA VISTA DEL PERFIL, CUANDO EL USER ESTÉ AUTENTICADO
module.exports.profile = (req, res, next) => {
  console.log(req.user)
  res.render('profile', { user: req.user })
}