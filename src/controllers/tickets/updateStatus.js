export function upadateStatus({request, response, database}){
  const { id } = request.params
  const {soluction} = request.body


  database.update("tickets", id, {status: "closed", soluction})
  
  return response.end()
}