
export default async function getAllPosts(){
    const result = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=20',
        {
            next : {
                revalidate : 10,  //// cache data for just 10 sec. after 10 sec refetch post again and store in cache.
            }
        }
    );
    if(!result.ok){
        throw new Error("There was an error fetching posts!")
    }
    return result.json();
}