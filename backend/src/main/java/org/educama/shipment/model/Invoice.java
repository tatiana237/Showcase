package org.educama.shipment.model;
import javax.persistence.Embeddable;
import java.time.Instant;


import java.util.Date;




/**
 * This represents the flight entity used for database persistence.
 */
@Embeddable
public class Invoice  {


    public String invoiceNumber;
    public Date invoiceCreationDate;
    public double preCarriage;
    public double exportInsurance;
    public double exportCustomsClearance;
    public double flightPrice;
    public double importInsurance;
    public double importCustomsClearance;
    public double onCarriage;
    public double managementFee;
    public double serviceFee;
    public double discount;





    /**
     * Constructor for JPA.
     */
    protected Invoice() {
        //empty
    }

    public Invoice(String invoiceNumber,  double invoiceCreationDate, double preCarriage, double exportInsurance, double flightPrice,
                   double importInsurance, double importCustomsClearance, double onCarriage, double managementFee, double serviceFee,
                   double discount) {
        this.invoiceNumber = invoiceNumber;
        this.invoiceCreationDate = invoiceCreationDate;
        this.preCarriage = preCarriage;
        this.exportInsurance = exportInsurance;
        this.flightPrice = flightPrice;
        this.importInsurance = importInsurance;
        this.importCustomsClearance = importCustomsClearance;
        this.onCarriage = onCarriage;
        this.managementFee = managementFee;
        this.serviceFee = serviceFee;
        this.discount = discount;

    }
}
