# Lab 8: Register Renaming

In previous weeks, we explored register hazards and we noted that creating delays in the pipline to solve these problems is not very efficient, as it wastes CPU clock cycles. An alternative method, register renaming, attempts to solve some of these hazards by another method, which avoids inserting stall cycles. This lab sesison explores that idea and a solution.