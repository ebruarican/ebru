let computer_parts = ["Monitors", "Motherboards", "Chips", "Hard Drives", "DVD-ROMs", "Cases", "Power", "Supplies"];
document.write(<p>Computer parts:</p>)
for (let p=0; p<computer_parts.length; p++ ){
    document.write(computer_parts[p]+"<br>");
}