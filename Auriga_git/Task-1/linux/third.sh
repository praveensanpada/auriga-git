read line
list=($(line))

for i in ${list[@]}; do
    echo $if
done
name="{"
for i in ${list[@]}; do
    str=$"name:$i"","$'\n'
    name+="$str"
done
name+="}"

echo $name > res.json