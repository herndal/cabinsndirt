//users and session
export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
)

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)

export const demoUser = {
  email: 'don@don.don',
  password: 'dondondon'
}

//locations
export const fetchLocations = () => (
  $.ajax({
    url: '/api/locations'
  })
)

export const fetchLocation = (id) => (
  $.ajax({
    url: `/api/locations/${id}`
  })
)