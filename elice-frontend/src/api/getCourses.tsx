import axios from 'axios'
import { FilterCondition } from '../types/filterType'

const OFFSET = 0
const COUNT = 20

export async function GetCourse(
  conditions: FilterCondition,
  offset: number = OFFSET,
  count: number = COUNT,
) {
  try {
    const res = await axios.get(
      'https://api-rest.elice.io/org/academy/course/list/',
      {
        params: {
          filter_conditions: JSON.stringify({
            $and: [
              { title: `%${conditions.title || ''}%` },
              {
                $or: conditions.isFree.map((value) => ({
                  enroll_type: 0,
                  is_free: value === 'free',
                })),
              },
            ],
          }),
          offset: offset,
          count: count,
        },
      },
    )
    console.log(res.data)
    return res.data
  } catch (e) {
    alert(e)
  }
}
