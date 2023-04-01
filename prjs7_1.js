let computer_parts = ["Monitors", "Motherboards", "Chips", "Hard Drives", "DVD-ROMs", "Cases", "Power", "Supplies"];
document.write(<p>Computer parts:</p>)
for (let i=0; i<computer_parts.length; i++ ){
    document.write(computer_parts[i]+"<br>");
}