import axios from 'axios'

const KEY = 'AIzaSyC56ee8D30irGbPdILOFghY2-q_kRxf-o0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})