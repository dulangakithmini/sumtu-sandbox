import yesno from "yesno";

export class TestReadline {
    public static async testReadline(): Promise<void> {
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

        const shouldUpgradeAll = await yesno({
            question: `Upgrade scripts ${upgradeScripts.map(sortedScript => sortedScript.version).join(", ")} found. Please confirm if the upgrades should be performed?`,
            defaultValue: true
        });
        if (!shouldUpgradeAll) return;
        for (const sortedScript of upgradeScripts) {
            const shouldUpgradeScript = await yesno({
                question: `Upgrade script ${sortedScript.version} found. Please confirm if the upgrade should be performed?`,
                defaultValue: true
            });
            if (!shouldUpgradeScript) console.error("Migrations are not performed.")
        }
    }

}

