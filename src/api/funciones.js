export const fetchProjects = async () => {
  try {
    const result = await fetch(
      "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test/projects"
    ).then((result) => result.json())
    return result
  } catch (error) {
    console.error(error)
  }
}

export const fetchMembers = async () => {
  try {
    const result = await fetch(
      "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test/members"
    ).then((result) => result.json())
    return result
  } catch (error) {
    console.error(error)
  }
}

export const fetchRoles = async () => {
  try {
    const resultRoles = await fetch(
      "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test/roles"
    ).then((resultRoles) => resultRoles.json())
    return resultRoles
  } catch (error) {
    console.error(error)
  }
}
