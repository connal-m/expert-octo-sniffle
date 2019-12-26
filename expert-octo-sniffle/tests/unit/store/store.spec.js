import axios from 'axios'
import {actions} from '@/store/store'

//Mock axios so we can mock what happens when the API doesn't work as expected.
jest.mock('axios')

test("good response", () => {
  //Mocking Vuex Commit
  let count = 0
  let data

  let mockCommit = (state, payload) => {
    data = payload
    count += 1
  }

  // Return A good reponse form API
  axios.get.mockImplementation(() => Promise.resolve({status: 200, ok: true, data: resp }));
  return actions.loadCrags({commit: mockCommit}).then(() => {
    expect(data).toEqual(resp.routes)
  })
});

test("bad response", () => {
  //Mocking Vuex Commit
  let count = 0
  let data

  let mockCommit = (state, payload) => {
    data = payload
    count += 1
  }

  // Return A bad reponse form API
  axios.get.mockImplementation(() => Promise.reject({status: 404}));
  return actions.loadCrags({commit: mockCommit}).catch(err => {
    expect(err.message).toBe('error 404')
  })
});

const resp = {
  "routes": [
    {
      "id": 1,
      "name": "Test",
      "type": "Trad",
      "rating": "5.11b",
      "stars": 4.9,
      "starVotes": 314,
      "pitches": 6,
      "location": [
        "Test Street",
        "Test Town",
      ],
      "url": "https:\/\/www.example.com\/route\/1\/test",
      "imgSqSmall": "https:\/\/www.example.com\/route\/1\/test_sq_small.jpg",
      "imgSmall": "https:\/\/www.example.com\/route\/1\/test_small.jpg",
      "imgSmallMed": "https:\/\/www.example.com\/route\/1\/test_small_med.jpg",
      "imgMedium": "https:\/\/www.example.com\/route\/1\/test_med.jpg",
      "longitude": 48.85,
      "latitude": 2.34
    },
    {
      "id": 2,
      "name": "Test2",
      "type": "Trad",
      "rating": "5.11b",
      "stars": 4.9,
      "starVotes": 314,
      "pitches": 6,
      "location": [
        "Test2 Street",
        "Test2 Town",
      ],
      "url": "https:\/\/www.example.com\/route\/2\/test",
      "imgSqSmall": "https:\/\/www.example.com\/route\/2\/test_sq_small.jpg",
      "imgSmall": "https:\/\/www.example.com\/route\/2\/test_small.jpg",
      "imgSmallMed": "https:\/\/www.example.com\/route\/2\/test_small_med.jpg",
      "imgMedium": "https:\/\/www.example.com\/route\/2\/test_med.jpg",
      "longitude": 49.85,
      "latitude": 3.34
    }
  ]
}
