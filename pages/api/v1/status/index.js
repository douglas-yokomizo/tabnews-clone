function status(request, response) {
  response.status(200).json({ mensagem: "Os alunos são acima da média" });
}

export default status;
