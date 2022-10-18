import readline from "readline";

export class TestReadline {
    public static testReadline() {
        console.log("Hello World");

        const upgradeScripts = [
            {
                version: "1.4.5",
            },
            {
                version: "1.4.19",
            },
            {
                version: "3.0.5",
            },
            {
                version: "2.0.5",
            },
            {
                version: "9.0.5",
            },
            {
                version: "6.0.5",
            }

        ]

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`Upgrade scripts ${upgradeScripts.map(sortedScript => sortedScript.version).join(", ")} found. Please confirm if the upgrades should be performed? (Y/n) `, async (answer: string) => {
            if (answer === 'Y' || answer === 'y') {
                for (const sortedScript of upgradeScripts) {

                    await rl.question(`Upgrade script ${sortedScript.version} found. Please confirm if the upgrade should be performed? (Y/n) `, async (answer: string) => {
                        if (answer === 'Y' || answer === 'y') {
                            console.log("Inside y");
                        } else {
                            console.log("Inside n");

                        }
                        rl.close();
                        console.error("Migrations are not performed.")

                    });

                }
            }
            rl.close();
            console.error("Outer log.")
        })

    }

}

