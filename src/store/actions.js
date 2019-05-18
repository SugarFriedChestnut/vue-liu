import {GET_DATA} from './mutation-types'

import axios from '../http'
// import moment from 'dayjs'

export default {
  async getData({commit}) {
    let res = await axios.req("/api/v1/recommend")
    // let date = new Date()
    // let d = date.getTime()
    // res.map(item => {
    //   let times = moment(d).valueOf() - moment(item.last_reply_at).valueOf()
    //   item.hours = (times / 60 / 60 / 1000).toFixed(0)
    // })
    // console.log(res.data);
    commit(GET_DATA, res.data)
  }
}
