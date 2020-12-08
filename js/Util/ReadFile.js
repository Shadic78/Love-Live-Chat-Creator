export const readFile = async path => {
    const res = await fetch(path);
    const json = await res.json();
    console.log(json);
    return json;
};