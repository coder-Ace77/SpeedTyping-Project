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
    vi v;
    while(n>0){
        int r = n%2;
        n=n/2;
        v.pb(r);
    }
    int s=0,fl=0,q=v[0],crr=0;
    int i=0;
    vi z;

    while(i<v.size()-1){
        if(v[i]==v[i+1])crr++;
        else{
            crr=0;
            z.pb(crr)
        } 
    }
    }
return 0;
}
//------------------------------------------------------------------------------------