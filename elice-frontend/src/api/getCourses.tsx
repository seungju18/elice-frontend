import { FilterCondition } from "../types/filterType";

const OFFSET = 0;
const COUNT = 20;

export async function GetCourse(
  conditions: FilterCondition,
  offset: number = OFFSET,
  count: number = COUNT
) {
  try {
    const res = await fetch(
      "https://api-rest.elice.io/org/academy/course/list?filter_conditions=" +
        encodeURIComponent(
          JSON.stringify({
            $and: [
              { title: `%${conditions.title || ""}%` },
              {
                $or: conditions.isFree.map((value) => ({
                  enroll_type: 0,
                  is_free: value === "free",
                })),
              },
            ],
          })
        ) +
        "&offset=" +
        offset +
        "&count=" +
        count
    );
    if (!res.ok) throw new Error("HTTP error! status : ${res.status}");
    const data = await res.json();
    return data;
  } catch (e) {
    alert(e);
  }
}
