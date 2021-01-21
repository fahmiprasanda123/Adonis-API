'use strict'

class FirstController {
  index({request, response, view}){
    let params = request.get('name');
    return view.render('index', {text: params.name})
  }
}

module.exports = FirstController
