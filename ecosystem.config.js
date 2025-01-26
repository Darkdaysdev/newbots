let Bots = [
{
name: "Moderation",
namespace: "Moderation",
script: 'index.js',
watch: true,
exec_mode: "cluster",
max_memory_restart: "2G",
cwd: "./Moderation/",
args: ['--color', '--watch'],
},
{
name: "Welcome",
namespace: "Welcome",
script: 'index.js',
watch: false,
exec_mode: "cluster",
max_memory_restart: "2G",
cwd: "./Welcome/",
args: ['--color', '--watch'],
},
{
name: "Guard",
namespace: "Guard",
script: 'index.js',
watch: true,
exec_mode: "cluster",
max_memory_restart: "2G",
cwd: "./Guard/",
args: ['--color', '--watch'],
},
]
module.exports = { apps: Bots }
