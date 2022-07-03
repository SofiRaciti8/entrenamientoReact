const URL_BASE = "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test"

export const fetchProjects = async () => {
  try {
    const result = await fetch(`${URL_BASE}/projects`).then((result) =>
      result.json()
    )
    return result
  } catch (error) {
    console.error(error)
  }
}

export const fetchMembers = async () => {
  try {
    const result = await fetch(`${URL_BASE}/members`).then((result) => result.json())
    return result
  } catch (error) {
    console.error(error)
  }
}

export const fetchRoles = async () => {
  try {
    const resultRoles = await fetch(`${URL_BASE}/roles`).then((resultRoles) =>
      resultRoles.json()
    )
    return resultRoles
  } catch (error) {
    console.error(error)
  }
}

export const submitMembers = async (member) => {
  try {
    const resultSubmitMembers = await fetch(`${URL_BASE}/members`, {
      method: "POST",
      body: JSON.stringify(member),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => response.status)
    return resultSubmitMembers
  } catch (error) {
    console.log("catch")
    console.error(error)
  }
}
