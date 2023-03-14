//__gcd(a,b),abs(x),log2(x),log10(),log(),pow(x,y)
#include<iostream>
#include<cmath>
#include<vector>
#include<unordered_set>
#include<algorithm>
#include<string>
#include<map>
#define f(n) for(int i=0;i<n;i++)
#define fr(i,n) for(int i=0;i<n;i+=1)
#define ceil(a,b) (a+b-1)/b
#define l long long int
#define vi vector<int>
#define pb(x) push_back(x)
using namespace std;


int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        int arr[n];
        f(n){
            cin>>arr[i];
        }
        sort(arr,arr+n);
        l s=0;
        f(n/2){
            s+=abs(arr[n-i-1]-arr[i]);
        }
        cout<<s<<endl;
    }
return 0;
}
//------------------------------------------------------------------------------------