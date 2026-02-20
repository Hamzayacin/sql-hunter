const axios = require('axios');
const readline = require('readline');
const fs = require('fs');




const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getPayloads(filePath){
    try{
        const data = fs.readFileSync(filePath, 'utf8')
        return data.split('\n').map(p=>p.trim()).filter(p=> p!=="");
    }catch(err){
        console.error("[!] ERROR Reading payloads file : " + err.message);
        return [];
    }
}
 rl.question('enter the target url : ', async (url)=>{
    const payloads = getPayloads('payloads.txt');
    const successfulPayloads = [];
    console.log(`[*] loaded ${payloads.length} payloads from file.\n`);
    for( const payload of payloads){
        try{
            console.log(`[+] testing : ${payload}`);
            const response = await axios.get(url+encodeURIComponent(payload));
            if(response.data.includes("SQL syntax") || response.data.includes("mysql_fetch")){
                console.log(`[!!!] SUCCESS : Vulnerability found with :  ${payload}`);
                successfulPayloads.push(payload);
            }
        }catch(error){
            if(error.response && err.response.status === 500){
                console.log(`Potential SQLi : server crashed (500) with payload : ${payload}`);
                successfulPayloads.push(payload + "  (server 500)")
            }else{
                console.log(`Connection error with payload : ${payload}`);
            }
        }
    }
    if (successfulPayloads.length>0){
        const reportContent = successfulPayloads.join('\n');
        fs.writeFileSync('result.txt', reportContent);
        console.log(`\n[V] Done! ${successfulPayloads.length} vulnerability saved to result.txt`);
    }else{
        console.log("\n[-] no vulnerability found to save");
    }
    console.log("\n [*]  Scan completed.");
    rl.close()
 })

