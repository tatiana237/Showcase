package org.educama.shipment.api.datastructure;

import org.educama.shipment.model.Invoice;


import java.util.Date;




/**
 * This represents the flight entity used for database persistence.
 */

public class InvoiceDS  {


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

    public InvoiceDS(Invoice invoice) {
        this.invoiceNumber = invoice.invoiceNumber;
        this.invoiceCreationDate = invoice.invoiceCreationDate;
        this.preCarriage = invoice.preCarriage;
        this.exportInsurance = invoice.exportInsurance;
        this.flightPrice = invoice.flightPrice;
        this.importInsurance = invoice.importInsurance;
        this.importCustomsClearance = invoice.importCustomsClearance;
        this.onCarriage = invoice.onCarriage;
        this.managementFee = invoice.managementFee;
        this.serviceFee = invoice.serviceFee;
        this.discount = invoice.discount;

    }
    public Invoice toInvoice() {
        return new Invoice(this.invoiceNumber, this.invoiceCreationDate, this.preCarriage, this.exportInsurance, this.exportCustomsClearance, this.flightPrice, this.importInsurance,
                this.importCustomsClearance, this.onCarriage, this.managementFee, this.serviceFee, this.discount);
    }
}
