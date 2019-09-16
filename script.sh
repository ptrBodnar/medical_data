#!/bin/bash
echo "doing"
nodejs script_to_shorten_data.js money_per_month output/payments_to_doctors.json > money_per_month.json
nodejs script_to_shorten_data.js decl_count output/payments_to_doctors.json > decl_count.json
echo "ended"