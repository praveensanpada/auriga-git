c=$(ls -l | wc -l)
if [ $c -gt 10 ]
then echo "Limit Exceed in Terminal Window"
fi