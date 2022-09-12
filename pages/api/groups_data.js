export async function loadGroups() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://127.0.0.1:8000/api/v1/?format=json')
  const data = await res.json()

  return data
}
