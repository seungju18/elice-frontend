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
                $or: conditions.price.map((value) => {
                  let isFree
                  if (value === '0') {
                    isFree = true
                  } else {
                    isFree = false
                  }
                  return { enroll_type: 0, is_free: isFree }
                }),
              },
            ],
          }),
          offset: offset,
          count: count,
        },
      },
    )
    return res.data
  } catch (e) {
    alert(e)
  }
}
