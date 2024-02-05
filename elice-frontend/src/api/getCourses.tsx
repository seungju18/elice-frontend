import axios from 'axios'

export async function GetCourse(
  title: string | null,
  price: string[] | null,
  page: number,
  count: number,
) {
  console.log(page)
  try {
    const filter_conditions = {
      $and: [
        { title: `%${title || ''}%` },
        {
          $or: [
            ...(price?.includes('29')
              ? [{ enroll_type: 0, is_free: true }]
              : []),
            ...(price?.includes('30')
              ? [{ enroll_type: 0, is_free: false }]
              : []),
          ],
        },
      ],
    }

    const res = await axios.get(
      'https://api-rest.elice.io/org/academy/course/list/',
      {
        params: {
          filter_conditions: JSON.stringify(filter_conditions),
          offset: (page - 1) * 20,
          count: count,
        },
      },
    )
    return res.data
  } catch (e) {
    alert(e)
  }
}
