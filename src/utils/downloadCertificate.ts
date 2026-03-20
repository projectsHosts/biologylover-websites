// utils/downloadCertificate.ts

export async function downloadCertificate(
  competitionId: number,
  token: string,
  recipientName: string
): Promise<void> {
  const response = await fetch(
    `/api/certificate/${competitionId}/certificate`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error("Failed to generate certificate")
  }

  const blob = await response.blob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `certificate-${recipientName.replace(/\s+/g, "-")}.pdf`
  link.click()
  URL.revokeObjectURL(url)
}