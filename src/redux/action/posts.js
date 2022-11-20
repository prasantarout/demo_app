import { UPDATE_POSTS, POSTS } from "../../config/urls"
import { apiPut, apiGet } from "../../utils/utils"


export function getPosts() {
    return apiGet(POSTS)
}
export function updatePost(id) {
    return apiPut(UPDATE_POSTS + `${id}`)
}


