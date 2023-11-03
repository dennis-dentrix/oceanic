import supabase from "./supabase"
export async function getAllNews() {

const { data: news, error } = await supabase
.from('news')
.select('*')

if(error) {
    console.error(error);
    throw new Error("Could not fetch news")
}

return news

}
