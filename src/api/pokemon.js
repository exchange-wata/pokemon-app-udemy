export const getAll = async (url) => {
  const res = await fetch(url)
  if (!res.ok) throw Error('レスポンスが正しくありませんでした。')
  return res.json()
}

export const getEach = async (url) => {
  const res = await fetch(url)
  if (!res.ok) throw Error('レスポンスが正しくありませんでした。')
  return res.json()
}
