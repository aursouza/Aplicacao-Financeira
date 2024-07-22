export function formatDate(date: string) {
  const newDate = new Date(date)

  const dateStandard = newDate.toLocaleDateString('pt-BR')
  /*, {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" de ")
    .join(" ");*/

  return dateStandard
}
