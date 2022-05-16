#include <iostream>
using namespace std;
int main()
{ int t;
    cin>>t;
    while (t--)
    { 
        int n, arr[n],min=1000,sum=0;
        cin>>n;
        for (int i = 0; i <n; i++)
        {
           cin>>arr[i];
        }
        for (int i = 0; i < n-1; i++)
        {
           if (arr[i]<=min)
           {
              min=arr[i];
           }
          
        }
        for (int i = 0; i <n; i++)
        {
           if (arr[i]>=min)
           {
             sum+=sum+(arr[i]-min);
           }
           
        }
        
        cout<<sum<<endl;
       
    }
    
    return 0;
}
