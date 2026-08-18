import java.util.Scanner;

// PARENT CLASS
class Food {
    private String foodId;
    private String name;
    private double price;
    private int quantity;
    private String category;

    // Constructor
    Food(String foodId, String name, double price, int quantity, String category) {
        this.foodId = foodId;
        this.name = name;
        setPrice(price);
        setQuantity(quantity);
        this.category = category;
    }

    // Getters
    public String getFoodId() {
        return foodId;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getCategory() {
        return category;
    }

    // Setters with validation
    public void setPrice(double price) {
        if (price > 0) {
            this.price = price;
        } else {
            this.price = 1;
        }
    }

    public void setQuantity(int quantity) {
        if (quantity >= 0) {
            this.quantity = quantity;
        } else {
            this.quantity = 0;
        }
    }

    // Display
    public void displayFood() {
        System.out.println("Food ID: " + foodId);
        System.out.println("Name: " + name);
        System.out.println("Price: " + price);
        System.out.println("Quantity: " + quantity);
        System.out.println("Category: " + category);
    }
}


// CHILD CLASS 1
class MainDish extends Food {
    private String servingSize;

    MainDish(String foodId, String name, double price,
             int quantity, String category, String servingSize) {

        super(foodId, name, price, quantity, category);
        this.servingSize = servingSize;
    }

    @Override
    public void displayFood() {
        super.displayFood();
        System.out.println("Serving Size: " + servingSize);
    }
}


// CHILD CLASS 2
class Dessert extends Food {
    private String sweetnessLevel;

    Dessert(String foodId, String name, double price,
            int quantity, String category, String sweetnessLevel) {

        super(foodId, name, price, quantity, category);
        this.sweetnessLevel = sweetnessLevel;
    }

    @Override
    public void displayFood() {
        super.displayFood();
        System.out.println("Sweetness Level: " + sweetnessLevel);
    }
}


// MAIN CLASS
public class Main {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        Food[] foods = new Food[100];

        int foodCount = 0;
        int choice;

        while (true) {

            System.out.println("\n===== FOOD REGISTRATION SYSTEM =====");
            System.out.println("1. Register Food");
            System.out.println("2. Display All Foods");
            System.out.println("3. Exit");
            System.out.print("Enter choice: ");
            choice = input.nextInt();
            input.nextLine();

            switch (choice) {

                case 1:

                    System.out.print("How many foods do you want to register? ");
                    int number = input.nextInt();
                    input.nextLine();

                    for (int i = 0; i < number; i++)    {

                        System.out.println("\nFood " + (i + 1));

                        System.out.print("Enter Food ID: ");
                        String id = input.nextLine();

                        System.out.print("Enter Food Name: ");
                        String name = input.nextLine();

                        System.out.print("Enter Price: ");
                        double price = input.nextDouble();

                        System.out.print("Enter Quantity: ");
                        int quantity = input.nextInt();
                        input.nextLine();

                        System.out.print("Enter Category: ");
                        String category = input.nextLine();

                        System.out.println("\nChoose Food Type:");
                        System.out.println("1. Main Dish");
                        System.out.println("2. Dessert");


                        System.out.print("Enter type: ");
                        int type = input.nextInt();
                        input.nextLine();


                        if (type == 1) {

                            System.out.print("Enter Serving Size: ");
                            String servingSize = input.nextLine();

                            foods[foodCount] = new MainDish(
                                    id, name, price, quantity,
                                    category, servingSize
                            );

                        } else if (type == 2) {

                            System.out.print("Enter Sweetness Level: ");
                            String sweetness = input.nextLine();

                            foods[foodCount] = new Dessert(
                                    id, name, price, quantity,
                                    category, sweetness
                            );

                        } else {

                            System.out.println("Invalid food type.");
                            continue;
                        }

                        foodCount++;

                        System.out.println("Food registered successfully!");
                    }

                    break;


                case 2:

                    if (foodCount == 0) {
                        System.out.println("No food records found.");
                    } else {
                        System.out.println("\n===== REGISTERED FOODS =====");

                        for (int i = 0; i < foodCount; i++) {

                            System.out.println("\nFood " + (i + 1));
                            foods[i].displayFood();

                        }

                    }

                    break;


                case 3:

                    System.out.println("Thank you!");
                    input.close();
                    return;


                default:

                    System.out.println("Invalid choice.");

            }
        }
    }
}