package org.educama.shipment.model;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.time.Instant;
import java.util.Date;

/**
 * This represents the invoice entity used for database persistence.
 */
@SuppressWarnings("serial")
@Entity
//@IdClass(InvoiceId.class)
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = "invoiceNumber") })
public class Invoice extends AbstractPersistable<Long> {

    //@Id
    @Column(unique = true)
    public String invoiceNumber;
    public long shipmentId;
    public Instant invoiceCreationDate;
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
}
