export default async(req, res) => {
  // 外部APIを呼び出し
  const response = await fetch("http://next-docker-tutorial_web_1:8081/user.php");
  const data = await response.json();
  res.status(200).json(data);
}